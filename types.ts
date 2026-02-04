import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionId {
  HERO = 'hero',
  ECOSYSTEM = 'ecosystem',
  SOUNDBOX = 'soundbox',
  CORPORATE = 'corporate',
  USE_CASES = 'use-cases',
  CONTACT = 'contact',
}

export interface UseCase {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  points: string[];
}

export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  text: string;
  isMapResult?: boolean;
  mapData?: any; // Simplify map data structure for demo
}

export enum VoiceState {
  IDLE = 'IDLE',
  CONNECTING = 'CONNECTING',
  LISTENING = 'LISTENING', // User is speaking or channel open
  SPEAKING = 'SPEAKING',   // AI is speaking
  ERROR = 'ERROR'
}