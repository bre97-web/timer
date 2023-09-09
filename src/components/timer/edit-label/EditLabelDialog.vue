<template>
    <Teleport to='body'>
        <md-dialog id="editLabelDialogRef">
            <span slot="headline">
                <span style="flex: 1;">Label</span>
            </span>
            <form id="editLabelForm" slot="content" method="dialog">
                <md-filled-text-field label="Label" autofocus></md-filled-text-field>
            </form>
            <div slot="actions">
                <md-text-button form="editLabelForm" value="cancel">Cancel</md-text-button>
                <md-text-button form="editLabelForm" value="ok">Apply</md-text-button>
            </div>
        </md-dialog>
    </Teleport>
</template>

