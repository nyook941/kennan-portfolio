import ProjectsModalAbout from "./project-modal-about";

export default function ProjectsModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  const handleBackgroundClick = (e: any) => {
    e.stopPropagation();
    closeModal();
  };

  // Prevent the modal close function when clicking on the modal itself
  const handleModalClick = (e: any) => {
    e.stopPropagation(); // Stops the click event from propagating to the parent
  };

  return (
    <div
      className={`Projects-Modal-Container ${isOpen ? "open" : ""}`}
      onClick={handleBackgroundClick}
    >
      <ProjectsModalAbout isOpen={isOpen} />
      <div
        className={`Projects-Modal two ${isOpen ? "open2" : ""}`}
        onClick={handleModalClick}
      ></div>
      <div
        className={`Projects-Modal three ${isOpen ? "open3" : ""}`}
        onClick={handleModalClick}
      ></div>
    </div>
  );
}
