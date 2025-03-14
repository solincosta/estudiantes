//Creación del APP
import { createApp } from "vue";
import App from "./App.vue";

//Importación de paquete Base
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

//Importación de Librerias de Estilos y componentes
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

//Importación de componentes
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

const app = createApp(App).use(router);
//Agregar los componentes al App
app.component("ButtonPrime", Button);
app.component("DialogPrime", Dialog);
app.use(VueAxios, axios);
//3. Uso de PrimeVue
 app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount("#app");
export { app };
