import ConfirmationAlert from '@/components/ConfirmationAlert/ConfirmationAlert.vue'
import Container from '@/components/Container.vue'
import EmptyState from '@/components/EmptyState.vue'
import EditorInput from '@/components/FormComponents/EditorInput.vue'
import FormButton from '@/components/FormComponents/FormButton.vue'
import PasswordInput from '@/components/FormComponents/PasswordInput.vue'
import SelectInput from '@/components/FormComponents/SelectInput.vue'
import TextAreaInput from '@/components/FormComponents/TextAreaInput.vue'
import TextInput from '@/components/FormComponents/TextInput.vue'
import Header from '@/components/Header.vue'
import HomeCard from '@/components/HomeCard.vue'
import LoadingContainer from '@/components/LoadingContainer.vue'
import ModalComponent from '@/components/ModalComponent.vue'
import Navbar from '@/components/Navbar.vue'
import SearchBar from '@/components/SearchBar.vue'
import Sidebar from '@/components/Sidebar.vue'
import SimpleEmptyState from '@/components/SimpleEmptyState.vue'
import TableHead from '@/components/TableHead.vue'
import { EventBus } from '@/utils/EventBus'
import '@fortawesome/fontawesome-free/css/all.css'
import '@popperjs/core'
import 'bootstrap'
import money from 'v-money3'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/styles.scss'
import './assets/theme/js/jquery.min.js'
import './assets/theme/theme.scss'
import FileUploader from './components/FileUploader/FileUploader.vue'
import MoneyInput from './components/FormComponents/MoneyInput.vue'
import ImageCropper from './components/ImageCropper/ImageCropper.vue'
import YoutubeInput from './components/YoutubeInput/YoutubeInput.vue'
import router, { paths } from './router'
import { store } from './store'
import './utils/Prototypes/prototypeFunctions'

const app = createApp(App)

app.component('Sidebar', Sidebar)
app.component('Navbar', Navbar)
app.component('LoadingContainer', LoadingContainer)
app.component('EmptyState', EmptyState)
app.component('SimpleEmptyState', SimpleEmptyState)
app.component('Container', Container)
app.component('SearchBar', SearchBar)
app.component('TextInput', TextInput)
app.component('MoneyInput', MoneyInput)
app.component('EditorInput', EditorInput)
app.component('SelectInput', SelectInput)
app.component('TextAreaInput', TextAreaInput)
app.component('PasswordInput', PasswordInput)
app.component('FormButton', FormButton)
app.component('TableHead', TableHead)
app.component('ModalComponent', ModalComponent)
app.component('Header', Header)
app.component('ConfirmationAlert', ConfirmationAlert)
app.component('HomeCard', HomeCard)
app.component('ImageCropper', ImageCropper)
app.component('FileUploader', FileUploader)
app.component('YoutubeInput', YoutubeInput)


app.config.globalProperties.$paths = paths
app.config.globalProperties.$eventBus = EventBus

app.use(store).use(router).use(money).mount('#app')
