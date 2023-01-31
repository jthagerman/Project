


export type UITheme = {
    colors: {
        whiteBackground: string
        whiteBodyColor: string
        whiteBackgroundContrast: string
        blackBackground: string
        background: string
        blackFont: string
        whiteFont: string
        white: string
        grayFont: string
        gray: string
        orange: string
        green: string
        lightGray: string
    },

    fonts: {
        fontSizes: {
            regular: string
            header: string
            large: string
            emphasized: string
        },
        fontWeights: {
            thin: number
            regular: number
            semibold: number
            bold: number
        },
        names: {
            outfit: string
            poppins: string
        },
    },
    buttons: {
        heights: {
            small: string
            normal: string
            large: string
        },
    },
    breakpoints: {
        mobile: string
        largePhone: string
        tablet: string
        laptop: string
        content: string

    }

}