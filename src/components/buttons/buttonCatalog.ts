import type { ComponentType } from 'react'

// Alle bestanden buttons1.tsx, buttons2.tsx, buttons3.tsx, ... verschijnen
// automatisch in de bibliotheek. Je hoeft dit bestand niet aan te passen.
export type ButtonMeta = {
  title?: string
  category?: string
  description?: string
  tags?: readonly string[]
}

type ButtonFile = {
  default: ComponentType
  buttonMeta?: ButtonMeta
}

export type ButtonEntry = {
  id: string
  number: number
  fileName: string
  title: string
  category: string
  description: string
  tags: readonly string[]
  Preview: ComponentType
  source: string
}

// Voor de twee bestaande buttons gebruiken we standaardlabels. Hun TSX-bestanden
// hoeven we niet te overschrijven. Zelfgemaakte buttons kunnen buttonMeta exporteren.
const defaultMeta: Record<number, ButtonMeta> = {
  1: {
    title: 'Gradient Action', category: 'Gradient',
    description: 'Een opvallende paarse actieknop met icoon en subtiele glow.',
    tags: ['Primary', 'Glow', 'CTA'],
  },
  2: {
    title: 'Outline Action', category: 'Outline',
    description: 'Een rustige secundaire knop met rand en downloadicoon.',
    tags: ['Secondary', 'Outline', 'Download'],
  },
}

const components = import.meta.glob<ButtonFile>('./buttons[0-9]*.tsx', { eager: true })
const sources = import.meta.glob<string>('./buttons[0-9]*.tsx', {
  eager: true,
  query: '?raw',
  import: 'default',
})

export const buttonCatalog: ButtonEntry[] = Object.entries(components)
  .map(([path, module]) => {
    const fileName = path.split('/').pop() ?? 'button.tsx'
    const number = Number(fileName.match(/^buttons(\d+)\.tsx$/)?.[1] ?? 0)
    const meta = module.buttonMeta ?? defaultMeta[number]
    return {
      id: `button-${number}`,
      number,
      fileName,
      title: meta?.title ?? `Button ${number}`,
      category: meta?.category ?? 'Overig',
      description: meta?.description ?? 'Een herbruikbare button voor jouw DevUI-collectie.',
      tags: meta?.tags ?? [],
      Preview: module.default,
      source: sources[path] ?? '',
    }
  })
  .filter(item => item.number > 0)
  .sort((a, b) => a.number - b.number)

// De voorbeelden zijn React-componenten, de code is altijd de echte TSX-file.
export function nextButtonNumber(): number {
  return Math.max(0, ...buttonCatalog.map(item => item.number)) + 1
}

export function makeButtonTemplate(number: number): string {
  return `// src/components/buttons/buttons${number}.tsx
// Deze button wordt automatisch zichtbaar op /buttons.

export const buttonMeta = {
  title: 'Mijn nieuwe button',
  category: 'Custom',
  description: 'Een korte beschrijving van de button.',
  tags: ['Eigen ontwerp'],
}

export default function Buttons${number}() {
  return (
    <button type="button" className="btnlib-empty-button" disabled>
      <span aria-hidden="true">+</span>
      <span>Button ${number}</span>
    </button>
  )
}
`
}
