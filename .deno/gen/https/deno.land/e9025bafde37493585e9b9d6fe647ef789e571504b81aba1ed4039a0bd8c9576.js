import { isParallel } from "./command.ts";
import { mergeParams } from "./merge_params.ts";
import { isParallelScripts, isScriptObject } from "./util.ts";
export function normalizeScript(script, rootParams) {
  const res = _normalizeScript(script, rootParams);
  return Array.isArray(res) ? res : [res];
}
function _normalizeScript(node, parentParams) {
  if (typeof node === "string") {
    return {
      cmd: node.trim(),
      ...mergeParams({}, parentParams),
    };
  }
  if (Array.isArray(node)) {
    return node.map((s) => _normalizeScript(s, parentParams));
  }
  if (isParallelScripts(node)) {
    return {
      pll: node.pll.flatMap((s) => _normalizeScript(s, parentParams)),
    };
  }
  if (isScriptObject(node)) {
    const { cmd, ...nodeParams } = node;
    return _normalizeScript(node.cmd, mergeParams(nodeParams, parentParams));
  }
  return null;
}
export function flattenCommands(commands) {
  return commands
    .filter((c) => c !== null)
    .flatMap((c) =>
      c instanceof Object && isParallel(c) ? flattenCommands(c.pll) : c
    );
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplX3NjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5vcm1hbGl6ZV9zY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsT0FBTyxFQUFXLFVBQVUsRUFBb0IsTUFBTSxjQUFjLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFLOUQsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsTUFBd0IsRUFDeEIsVUFBeUI7SUFFekIsTUFBTSxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUN2QixJQUF3QyxFQUN4QyxZQUEyQjtJQUUzQixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUM1QixPQUFPO1lBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDaEIsR0FBRyxXQUFXLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQztTQUN0QixDQUFDO0tBQ2Q7SUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdkIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBRXZELENBQUM7S0FDSDtJQUNELElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDM0IsT0FBTztZQUNMLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzVDLENBQUM7S0FDdkI7SUFDRCxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN4QixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLE9BQU8sZ0JBQWdCLENBQ3JCLElBQUksQ0FBQyxHQUFHLEVBQ1IsV0FBVyxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FDM0IsQ0FBQztLQUNkO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsUUFBK0M7SUFFL0MsT0FBTyxRQUFRO1NBQ1osTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDO1NBQ3pCLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQ2IsQ0FBQyxZQUFZLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDckQsQ0FBQztBQUNuQixDQUFDIn0=