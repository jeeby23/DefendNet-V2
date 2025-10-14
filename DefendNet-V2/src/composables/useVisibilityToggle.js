import { ref } from "vue";

export default function useVisibilityToggle(isVisible = true){
    const Visible  = ref(isVisible)

    function toggle(){
        Visible.value = !Visible.value
    }
 return {
    Visible,toggle

 }

}