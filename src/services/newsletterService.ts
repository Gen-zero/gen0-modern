
// A simple service to store subscribers (in localStorage for demo purposes)
// In a production app, you would connect this to a database or email marketing service

export interface Subscriber {
  email: string;
  date: string;
}

export const newsletterService = {
  /**
   * Add a new subscriber
   */
  addSubscriber: (email: string): void => {
    const subscribers = newsletterService.getSubscribers();
    const newSubscriber: Subscriber = {
      email,
      date: new Date().toISOString(),
    };
    
    subscribers.push(newSubscriber);
    localStorage.setItem('gen0_newsletter_subscribers', JSON.stringify(subscribers));
  },
  
  /**
   * Get all subscribers
   */
  getSubscribers: (): Subscriber[] => {
    const storedSubscribers = localStorage.getItem('gen0_newsletter_subscribers');
    return storedSubscribers ? JSON.parse(storedSubscribers) : [];
  },
  
  /**
   * Check if email is already subscribed
   */
  isSubscribed: (email: string): boolean => {
    const subscribers = newsletterService.getSubscribers();
    return subscribers.some(subscriber => subscriber.email.toLowerCase() === email.toLowerCase());
  }
};
