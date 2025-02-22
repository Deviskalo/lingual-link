export class RateLimit {
  private timestamps: { [key: string]: number[] } = {}
  private windowMs: number
  private maxRequests: number

  constructor(windowMs: number, maxRequests: number) {
    this.windowMs = windowMs
    this.maxRequests = maxRequests
  }

  async check(key: string): Promise<boolean> {
    const now = Date.now()
    const timestamps = this.timestamps[key] || []
    
    // Remove old timestamps
    const validTimestamps = timestamps.filter(t => now - t < this.windowMs)
    this.timestamps[key] = validTimestamps

    if (validTimestamps.length >= this.maxRequests) {
      return false
    }

    this.timestamps[key] = [...validTimestamps, now]
    return true
  }
} 