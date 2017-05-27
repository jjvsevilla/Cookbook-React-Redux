export function getItemById(items, id) {
  const item = items.find(item => item.id == id);
  if (item) return item;
  return null;
}

export const formattedForDropdown = (items, propId, props) => {
  const joiningProps = (item, separator = ' - ') =>
    Object.keys(item)
      .filter(k => props.includes(k))
      .map(k => item[k])
      .join(separator);
  return items.map(item => ({ value: item[propId], text: joiningProps(item) }));
};
