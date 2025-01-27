/**
 * Escape fieldname following the spec requirements.
 *
 * See: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#multipart-form-data
 *
 * @param name A fieldname to escape
 *
 * @api private
 */
const escapeName = (name: unknown) => String(name)
  .replace(/\r/g, "%0D") // CR
  .replace(/\n/g, "%0A") // LF
  .replace(/"/g, "%22")

export default escapeName
