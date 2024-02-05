export default function ProjectsModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  const containerClassName = isOpen
    ? "Projects-Modal-Container open"
    : "Projects-Modal-Container close";

  const backgroundClassName = isOpen
    ? "Projects-Modal-Background open"
    : "Projects-Modal-Background close";

  const handleBackgroundClick = (e: any) => {
    e.stopPropagation();
    closeModal();
  };

  return isOpen ? (
    <div className={containerClassName}>
      <div
        className={backgroundClassName}
        onClick={handleBackgroundClick}
      ></div>
      {/* <div className="Projects-Modal" onClick={(e) => e.stopPropagation()}>
        <div className="Projects-Modal-1"></div>
        <div className="Projects-Modal-2"></div>
        <div className="Projects-Modal-3"></div>
      </div> */}
    </div>
  ) : null;
}
