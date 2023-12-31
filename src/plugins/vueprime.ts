import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import Checkbox from 'primevue/checkbox';
import Rating from 'primevue/rating';
import Carousel from 'primevue/carousel';
import Chip from 'primevue/chip';
import Tag from 'primevue/tag';
import 'primevue/resources/themes/viva-dark/theme.css'
import 'primevue/resources/primevue.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import Divider from 'primevue/divider';
import PrimeVue from 'primevue/config';
import Image from 'primevue/image';
import Dialog from 'primevue/dialog';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import ProgressBar from 'primevue/progressbar';
import Menubar from 'primevue/menubar';
import Dropdown from 'primevue/dropdown';
import Slider from 'primevue/slider';
import ScrollTop from 'primevue/scrolltop';
import Steps from 'primevue/steps';

export default function initPrime(app){
    app.use(PrimeVue, {});

    app.component('Button', Button);
    app.component('InputText', InputText);
    app.component('Toast', Toast);
    app.component('Checkbox', Checkbox);
    app.component('Rating', Rating);
    app.component('Carousel', Carousel);
    app.component('Chip', Chip);
    app.component('Tag', Tag);
    app.component('Divider', Divider);
    app.component('Image', Image);
    app.component('Dialog', Dialog);
    app.component('TabView', TabView);
    app.component('TabPanel', TabPanel);
    app.component('ProgressBar', ProgressBar);
    app.component('Menubar', Menubar);
    app.component('Dropdown', Dropdown);
    app.component('Slider', Slider);
    app.component('ScrollTop', ScrollTop);
    app.component('Steps', Steps);

}