type PathTypes = 'main' | 'auth'
export const routes:Record<PathTypes, string> = {
  get main() {
    return '/'
  },
  get auth() {
    return this.main + 'auth'
  }
}