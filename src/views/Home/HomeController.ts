import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

interface Item {
  id: string;
  title: string;
  size: string;
  card_locality: string;
  price: string;
  status: string;
  card_image: string;
}

export default defineComponent({
  name: "HomeController",
  setup() {
    const items = ref<Item[]>([]);

    const fetchData = async () => {
      try {
        const response = await axios.get("https://9wf1jnv947.execute-api.us-east-1.amazonaws.com/dev/auction");
        items.value = response.data;
      } catch (error) {
        console.error("Erro ao buscar dados", error);
      }
    };

    const updateGeolocation = (id: string) => {
      console.log(`Atualizando geolocalização do item com id: ${id}`);
      // Adicionar lógica para atualizar geolocalização
    };

    onMounted(() => {
      fetchData();
    });

    return {
      items,
      updateGeolocation
    };
  }
});
