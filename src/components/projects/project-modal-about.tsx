export default function ProjectsModalAbout({ isOpen }: { isOpen: boolean }) {
  const handleModalClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`Projects-Modal one ${isOpen ? "open1" : ""}`}
      onClick={handleModalClick}
    ></div>
  );
}
