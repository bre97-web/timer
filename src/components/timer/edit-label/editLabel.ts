import { MDButton, MDDialog, MDTextField } from "@/types/MDComponents"
import { EventPackage } from "@/store/TimerStore"
import { ref } from "vue"

const targetTimer = ref<EventPackage | null>()

export const willEditLabel = (e: EventPackage) => {
    targetTimer.value = e

    const dialog = openEditLabelDialog()
    
    dialog.addEventListener('submit', (e) => {
        const value = ((e.target as HTMLElement).children.item(0) as MDTextField).value

        if((e.submitter as MDButton).value === 'ok') {
            targetTimer.value.label = value
        }
    })

    dialog.show()
}

function openEditLabelDialog(): MDDialog {
    return document.getElementById('editLabelDialogRef') as MDDialog
}