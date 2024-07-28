import {BASE_URL} from "@/api/config";
const useFetchData = () => (
  {
    getPaymentsInfo: async () => {
      try {
        return await fetch(`${BASE_URL}/json/mock-payments-info.json`);
      } catch (e) {
        throw e;
      }
    },
    postPaymentsInfo: async () => {
      try {
        return await fetch(`${BASE_URL}/json/mock-invoice-create-success.json`);
        // return await axios.get(`${BASE_URL}/assets/json/mock-invoice-create-failed.json`);
      } catch (e) {
        throw e;
      }
    }
  }
);

export default useFetchData;