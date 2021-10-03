function serialize(filePath, object, options) {
  try {
    const jsonString = JSON.stringify(object, options.replacer, options.spaces);
    return `${jsonString}\n`;
  } catch (err) {
    err.message = `${filePath}: ${err.message}`;
    throw err;
  }
}
export async function writeJson(filePath, object, options = {}) {
  const jsonString = serialize(filePath, object, options);
  await Deno.writeTextFile(filePath, jsonString, {
    append: options.append,
    create: options.create,
    mode: options.mode,
  });
}
export function writeJsonSync(filePath, object, options = {}) {
  const jsonString = serialize(filePath, object, options);
  Deno.writeTextFileSync(filePath, jsonString, {
    append: options.append,
    create: options.create,
    mode: options.mode,
  });
}
export async function readJson(filePath) {
  const decoder = new TextDecoder("utf-8");
  const content = decoder.decode(await Deno.readFile(filePath));
  try {
    return JSON.parse(content);
  } catch (err) {
    err.message = `${filePath}: ${err.message}`;
    throw err;
  }
}
export function readJsonSync(filePath) {
  const decoder = new TextDecoder("utf-8");
  const content = decoder.decode(Deno.readFileSync(filePath));
  try {
    return JSON.parse(content);
  } catch (err) {
    err.message = `${filePath}: ${err.message}`;
    throw err;
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImpzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0EsU0FBUyxTQUFTLENBQ2hCLFFBQWdCLEVBQ2hCLE1BQWUsRUFDZixPQUF5QjtJQUV6QixJQUFJO1FBQ0YsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FDL0IsTUFBTSxFQUNOLE9BQU8sQ0FBQyxRQUFvQixFQUM1QixPQUFPLENBQUMsTUFBTSxDQUNmLENBQUM7UUFDRixPQUFPLEdBQUcsVUFBVSxJQUFJLENBQUM7S0FDMUI7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxRQUFRLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVDLE1BQU0sR0FBRyxDQUFDO0tBQ1g7QUFDSCxDQUFDO0FBR0QsTUFBTSxDQUFDLEtBQUssVUFBVSxTQUFTLENBQzdCLFFBQWdCLEVBQ2hCLE1BQWUsRUFDZixVQUE0QixFQUFFO0lBRTlCLE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFO1FBQzdDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtRQUN0QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07UUFDdEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO0tBQ25CLENBQUMsQ0FBQztBQUNMLENBQUM7QUFHRCxNQUFNLFVBQVUsYUFBYSxDQUMzQixRQUFnQixFQUNoQixNQUFlLEVBQ2YsVUFBNEIsRUFBRTtJQUU5QixNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRTtRQUMzQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07UUFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1FBQ3RCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtLQUNuQixDQUFDLENBQUM7QUFDTCxDQUFDO0FBR0QsTUFBTSxDQUFDLEtBQUssVUFBVSxRQUFRLENBQUMsUUFBZ0I7SUFDN0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFekMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUU5RCxJQUFJO1FBQ0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzVCO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsUUFBUSxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QyxNQUFNLEdBQUcsQ0FBQztLQUNYO0FBQ0gsQ0FBQztBQUdELE1BQU0sVUFBVSxZQUFZLENBQUMsUUFBZ0I7SUFDM0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFekMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFNUQsSUFBSTtRQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM1QjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLFFBQVEsS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUMsTUFBTSxHQUFHLENBQUM7S0FDWDtBQUNILENBQUMifQ==