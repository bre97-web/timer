import { MDButton, MDDialog, MDTextField } from "@/types/MDComponents"
import { EventPackage } from "@/store/TimerStore"

export const willEditLabel = (target: EventPackage) => {
    const dialog = openEditLabelDialog()
    
    dialog.addEventListener('submit', (e) => {
        const value = ((e.target as HTMLElement).children.item(0) as MDTextField).value

        if((e.submitter as MDButton).value === 'ok') {
            target.label = value
        }
    })

    dialog.show()
}

function openEditLabelDialog(): MDDialog {
    return document.getElementById('editLabelDialogRef') as MDDialog
}