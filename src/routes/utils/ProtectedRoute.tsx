export const ProtectedRoute = ({ protection, component }: any) => {
  return protection ? component : null;
};
