import { useContext } from "@nuxtjs/composition-api"
export default function useCookie() {
    return useContext().app.$cookies
}