type TaskCardProps = {
  title: string;
  description: string | null;
  isCompleted: boolean;
};

export const TaskCard = ({
  title,
  description,
  isCompleted,
}: TaskCardProps) => {
  return (
    <li>
      <h4>{title}</h4>
      {description ? (
        <p>{description}</p>
      ) : (
        <p>Task doesn't have a description.</p>
      )}
      {isCompleted && <p>Task is completed.</p>}
    </li>
  );
};
