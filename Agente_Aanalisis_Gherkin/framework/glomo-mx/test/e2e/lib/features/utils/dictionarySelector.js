/**
 * Check visibility of element
 *
 * @param element: long format element entry
 * @param rootElement: parent of the element in selector tree
 * @param _args
 */
export async function checkElementFromDict(element, rootElement = this, _args = {}) {
    const collapsed = _args.collapsed ? 'collapsed.' : '';
    const dictionaryItem = rootElement.properties.elementsDictionary[element];
    const theElement = _.get(collapsed ? rootElement.collapsed : rootElement, dictionaryItem);
    if (theElement) {
        if (!collapsed) {
            if (_args.notVisible) {
                return !((await (theElement.visibility())));
            }
            return theElement.visibility();
        }
        return theElement.exists();
    }
    return false;
}
