
function useNavigate(label: string, icon: string, path:string) {
    return ({
        label,
        icon,
        path
    })
}

const routerList = [
    useNavigate('Home', 'home', '/'),
    useNavigate('Calculator', 'calculator', '/calculator'),
]

export const getNavigationList = () => routerList
