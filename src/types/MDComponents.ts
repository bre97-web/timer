export type MDDialog = {
    show: () => void
    close: () => void
} & HTMLElement

export type MDTextField = {
    value: string
} & HTMLElement

export type MDButton = {
    value: string
} & HTMLElement
