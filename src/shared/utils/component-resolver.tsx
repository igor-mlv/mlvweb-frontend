import { ReactElement, lazy, createElement, Suspense } from 'react';
// import Loader from '../components/Loader';

export default function componentResolver(section: any, index: number): ReactElement {

    // Component names do look like 'category.component-name' => lowercase and kebap case
    const names: string[] = section.__component.split('.')

    // Get category name
    //const category = names[0]

    // Get component name
    const component = names[1]

    ///////////////////////////////////////////////
    // Convert the kebap-case name to PascalCase
    const parts: string[] = component.split('-')

    let componentName = ''

    parts.forEach(s => {
        componentName += capitalizeFirstLetter(s)
    })

    // Use react lazy loading to import the module. By convention: The file name needs to match the name of the component (what is a good idea)
    const componentUI = lazy(() => import(`../components/${componentName}`))

    // Create react element. The 'type' argument needs to be a FunctionComponent, not a string
    const reactElement = createElement(componentUI, { data: section, key: index })

    return (
        <Suspense fallback={<>Loading ...</>} key={index}>
            {reactElement}
        </Suspense>
    )
}

function capitalizeFirstLetter(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}