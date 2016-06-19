export default {
  modalBackdrop: {
    display: "none",
    visibility: "hidden",
    opacity: 0,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    background: "rgba(66, 81, 90, 0.5)",
    overflow: "hidden",
    zIndex: 1000
  },
  modalContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    WebkitTransform: "translate(-50%, -50%)",
    MsTransform: "translate(-50%, -50%)",
    width: "560px",
    background: "#ffffff",
    padding: "0 50px",
    overflow: "hidden"
  },
  modalDismiss: {
    display: "inline-block",
    position: "absolute",
    top: "5px",
    right: "5px",
    background: "none",
    border: "none",
    width: "30px",
    height: "30px",
    fontSize: "30px",
    lineHeight: "30px",
    outline: "none",
    padding: 0
  },
  modalIcon: {
    color: "#DDDDDD",
    cursor: "pointer",
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: "bold",
    verticalAlign: "middle"
  },
  modalHeader: {
    margin: "20px 0"
  },
  modalContent: {
    margin: "20px 0"
  },
  modalFooter: {
    margin: "20px 0"
  }
};