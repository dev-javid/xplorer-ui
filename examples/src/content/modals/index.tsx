import { Button, useSimpleConfirm, useSimpleModal } from "xplorer-ui";

const Modals = () => {
  const { hideModal, showModal } = useSimpleModal();
  const { showConfirm, hideConfirm } = useSimpleConfirm();
  return (
    <div className="flex gap-2">
      <Button onClick={() => showModal("Modal Heading", "This is modal body.")}>
        Basic Modal
      </Button>
      <Button
        onClick={() =>
          showModal(
            "Modal Heading",
            <div>
              <h1 className="text-primary">This is modal JSX body</h1>
              <h1 className="text-lime-400">This is modal JSX body</h1>
              <div className="m-5">
                <Button onClick={hideModal}>Close Modal</Button>
              </div>
            </div>
          )
        }
      >
        Modal JSX Body
      </Button>
      <Button
        variant="outline"
        onClick={async () => {
          const ok = await showConfirm("Confirm Heading", "Are you sure?");
          alert(`You clicked ${ok ? "OK" : "Cancel"}`);
        }}
      >
        Basic Confirm
      </Button>
      <Button
        variant="outline"
        onClick={async () => {
          const ok = await showConfirm(
            "Modal Heading",
            <div>
              <h1 className="text-primary">This is modal JSX body</h1>
              <h1 className="text-lime-400">This is modal JSX body</h1>
              <div className="m-5">
                <Button onClick={hideConfirm}>Close Confirm</Button>
              </div>
            </div>
          );

          alert(`You clicked ${ok ? "OK" : "Cancel"}`);
        }}
      >
        Confirm JSX Body
      </Button>
    </div>
  );
};

export default Modals;
