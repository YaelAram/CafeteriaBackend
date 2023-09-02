export const checkCreateModel = (createModel: boolean, createdAt: number) => {
  const createdDate = new Date(createdAt);
  const currentDate = new Date();

  return (
    createModel ||
    createdAt === -1 ||
    createdDate.getDate() < currentDate.getDate() ||
    createdDate.getMonth() < currentDate.getMonth() ||
    createdDate.getFullYear() < currentDate.getFullYear()
  );
};
