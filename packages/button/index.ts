import Button from './src/button.vue'
import {App} from "vue";

Button.install = (app: App) => {
    app.component(Button.name, Button)
}

type IWithInstall<T> = T & { install(app: App): void }
const _Button: IWithInstall<typeof Button> = Button;
export default _Button;
