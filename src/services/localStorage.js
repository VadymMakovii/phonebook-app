export const getInitialValue = () => {
  const saved = JSON.parse(localStorage.getItem('subscriptions'));
  return saved ?? [];
};
