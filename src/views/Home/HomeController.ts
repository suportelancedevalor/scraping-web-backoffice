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
  lat: string;
  lng: string;
}

export default defineComponent({
  name: "HomeController",
  setup() {
    const items = ref<Item[]>([]);

    const fetchData = async () => {
        try {
          const apiURL = process.env.NODE_ENV === 'production'
            ? 'https://9wf1jnv947.execute-api.us-east-1.amazonaws.com/dev/auction'
            : '/dev/auction';
  
          const response = await axios.get(apiURL, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          items.value = response.data;
        } catch (error) {
          console.error("Erro ao buscar dados", error);
        }
    };

    const updateGeolocation = async (id: string) => {
      try {
        const response = await axios.get(
          `https://zzpjt2m896.execute-api.us-east-1.amazonaws.com/dev/gm_location?uuid=${id}`
        );
        
        // Verifica o status da resposta e exibe a mensagem correspondente
        if (response.status === 200) {
          alert("Geolocalização atualizada com sucesso!");
        } else {
          alert("Erro ao atualizar geolocalização. Tente novamente.");
        }
      } catch (error) {
        alert("Erro ao tentar atualizar geolocalização");
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      items,
      updateGeolocation,
    };
  },
});