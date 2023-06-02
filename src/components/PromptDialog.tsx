import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export type PromptDialogProps = {
  title: string;
  description: string;
  open: boolean;
  onOk: () => void;
  onClose: () => void;
};

export default function PromptDialog(props: PromptDialogProps) {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" sx={{ color: "#000000" }}>
        {props.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={props.onClose}>
          Cancel
        </Button>
        <Button onClick={props.onOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}
