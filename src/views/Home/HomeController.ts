import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

interface AuctionData {
  images: string[];
  title: string;
  location: string;
  description: string;
  valuation: string;
  status: string;
  auction_dates: {
    first_auction: string;
    second_auction: string;
  };
  lat: string;
  lng: string;
}

interface Item {
  id: string;
  auction_data: AuctionData;
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
        alert("Erro ao tentar atualizar geolocalização: " + error.message);
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
