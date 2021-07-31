import Button from '@cloud-ui/button'
import Icon from '@cloud-ui/button'
import {App} from "vue";

const components = [
    Button,
    Icon
]

const install = (app: App):void => {
    components.forEach(component => {
        app.component(component.name, component)
    })
}

export default {
    install
}
