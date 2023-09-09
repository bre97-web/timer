
/**
 * The dialog file is only for md-dialog
 */

import { MDButton, MDDialog } from "@/types/MDComponents"

const successStatus = ['ok', 'success', 'submit', 'yes']
const cancelStatus = ['no', 'cancel', 'faild']

/**
 * 
 * @param id the element unique id of the dialog
 * @param handle run callback while dialog is submitted
 */
export const openDialog = (id: string, callbackSuccess: () => void = () => {}, callbackCancel: () => void = () => {}) => {
    const dialog = getDialogById(id)

    dialog.addEventListener('submit', (e) => {
        if(successStatus.includes((e.submitter as MDButton).value)) {
            callbackSuccess()
        }
        if(cancelStatus.includes((e.submitter as MDButton).value)) {
            callbackCancel()
        }
    })

    dialog.show()
}

export const closeDialog = (id: string) => {
    getDialogById(id).close()
}

function getDialogById(id: string): MDDialog {
    return document.getElementById(id) as MDDialog
}