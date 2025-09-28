import { useState, useMemo } from 'react';

export const useCalculator = () => {
  const [numInvites, setNumInvites] = useState(100);
  const [eventDuration, setEventDuration] = useState(7);

  const calculatedPrice = useMemo(() => {
    const basePrice = 5000;
    const inviteMultiplier = 50;
    const durationMultiplier = 200;
    return basePrice + (numInvites * inviteMultiplier) + (eventDuration * durationMultiplier);
  }, [numInvites, eventDuration]);

  const priceBreakdown = useMemo(() => ({
    base: 5000,
    inviteCost: numInvites * 50,
    durationCost: eventDuration * 200,
    total: calculatedPrice
  }), [numInvites, eventDuration, calculatedPrice]);

  return {
    numInvites,
    setNumInvites,
    eventDuration,
    setEventDuration,
    calculatedPrice,
    priceBreakdown
  };
};