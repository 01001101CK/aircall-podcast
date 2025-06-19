"use client";
import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { Blog } from '../types/blog';
import { Podcast } from '../types/podcast';

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  filteredBlogs: Blog[];
  filteredPodcasts: Podcast[];
  sortedPodcasts: Podcast[];
  isSearching: boolean;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children, blogs, podcasts }: { 
  children: ReactNode; 
  blogs: Blog[];
  podcasts: Podcast[];
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [sortBy, setSortBy] = useState('');

  // Filter blogs based on search query and filter
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = searchQuery === '' || 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = selectedFilter === 'All' || 
      blog.category.toLowerCase() === selectedFilter.toLowerCase();
    
    return matchesSearch && matchesFilter;
  });

  // Filter podcasts based on search query
  const filteredPodcasts = podcasts.filter(podcast => {
    if (podcast.isComingSoon) return false; // Don't show coming soon in search results
    
    return searchQuery === '' || 
      podcast.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (podcast.description && podcast.description.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  // Sort podcasts based on selected sort option
  const sortedPodcasts = useMemo(() => {
    const filtered = filteredPodcasts;
    
    switch (sortBy) {
      case 'date':
        return [...filtered].sort((a, b) => {
          if (!a.date || !b.date) return 0;
          return new Date(b.date).getTime() - new Date(a.date).getTime(); // Newest first
        });
      case 'title':
        return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
      case 'duration':
        return [...filtered].sort((a, b) => {
          const aMinutes = parseInt(a.duration.replace('MIN', ''));
          const bMinutes = parseInt(b.duration.replace('MIN', ''));
          return aMinutes - bMinutes;
        });
      default:
        return filtered;
    }
  }, [filteredPodcasts, sortBy]);

  const isSearching = searchQuery.length > 0;

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      selectedFilter,
      setSelectedFilter,
      sortBy,
      setSortBy,
      filteredBlogs,
      filteredPodcasts,
      sortedPodcasts,
      isSearching
    }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
} 