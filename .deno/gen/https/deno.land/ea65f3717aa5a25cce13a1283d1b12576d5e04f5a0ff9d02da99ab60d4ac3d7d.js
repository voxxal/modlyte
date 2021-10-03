import { distance } from "../_utils/distance.ts";
export function paramCaseToCamelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}
export function getOption(flags, name) {
  while (name[0] === "-") {
    name = name.slice(1);
  }
  for (const flag of flags) {
    if (isOption(flag, name)) {
      return flag;
    }
  }
  return;
}
export function didYouMeanOption(option, options) {
  const optionNames = options
    .map((option) => [option.name, ...(option.aliases ?? [])])
    .flat()
    .map((option) => getFlag(option));
  return didYouMean(" Did you mean option", getFlag(option), optionNames);
}
export function didYouMeanType(type, types) {
  return didYouMean(" Did you mean type", type, types);
}
export function didYouMean(message, type, types) {
  const match = closest(type, types);
  return match ? `${message} "${match}"?` : "";
}
export function getFlag(name) {
  if (name.startsWith("-")) {
    return name;
  }
  if (name.length > 1) {
    return `--${name}`;
  }
  return `-${name}`;
}
function isOption(option, name) {
  return option.name === name ||
    (option.aliases && option.aliases.indexOf(name) !== -1);
}
function closest(str, arr) {
  let minDistance = Infinity;
  let minIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    const dist = distance(str, arr[i]);
    if (dist < minDistance) {
      minDistance = dist;
      minIndex = i;
    }
  }
  return arr[minIndex];
}
export function getDefaultValue(option) {
  return typeof option.default === "function"
    ? option.default()
    : option.default;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3V0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiX3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUdqRCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsR0FBVztJQUM5QyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQ2hCLFdBQVcsRUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUMxQixDQUFDO0FBQ0osQ0FBQztBQVFELE1BQU0sVUFBVSxTQUFTLENBQ3ZCLEtBQWUsRUFDZixJQUFZO0lBRVosT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQ3RCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RCO0lBRUQsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7UUFDeEIsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRjtJQUVELE9BQU87QUFDVCxDQUFDO0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUM5QixNQUFjLEVBQ2QsT0FBNEI7SUFFNUIsTUFBTSxXQUFXLEdBQUcsT0FBTztTQUN4QixHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3pELElBQUksRUFBRTtTQUNOLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDcEMsT0FBTyxVQUFVLENBQUMsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzFFLENBQUM7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLElBQVksRUFBRSxLQUFvQjtJQUMvRCxPQUFPLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQ3hCLE9BQWUsRUFDZixJQUFZLEVBQ1osS0FBb0I7SUFFcEIsTUFBTSxLQUFLLEdBQXVCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkQsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDL0MsQ0FBQztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsSUFBWTtJQUNsQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDeEIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDbkIsT0FBTyxLQUFLLElBQUksRUFBRSxDQUFDO0tBQ3BCO0lBQ0QsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ3BCLENBQUM7QUFRRCxTQUFTLFFBQVEsQ0FBQyxNQUFvQixFQUFFLElBQVk7SUFDbEQsT0FBTyxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUk7UUFDekIsQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUQsQ0FBQztBQUVELFNBQVMsT0FBTyxDQUFDLEdBQVcsRUFBRSxHQUFhO0lBQ3pDLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQztJQUMzQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7WUFDdEIsV0FBVyxHQUFHLElBQUksQ0FBQztZQUNuQixRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQ2Q7S0FDRjtJQUNELE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLE1BQW9CO0lBQ2xELE9BQU8sT0FBTyxNQUFNLENBQUMsT0FBTyxLQUFLLFVBQVU7UUFDekMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDbEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDckIsQ0FBQyJ9