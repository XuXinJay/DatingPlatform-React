import { useState } from "react";

interface Activity {
  activityPlace: string;
  activityId: number;
  activityName: string;
  activityPartyTime: string;
  name: string;
  activityImage: string;
  movie: number;
  sports: number;
  boardGame: number;
  dineTogether: number;
}

interface UseFilterActivitiesReturnType {
  filterByLocation: string;
  filteredActivities: Activity[];
  handleFilterClick: (location: string, activities: Activity[]) => void;
}

const useFilterActivities = (): UseFilterActivitiesReturnType => {
  const [filterByLocation, setFilterByLocation] = useState<string>("");
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);

  const handleFilterClick = (location: string, activities: Activity[]) => {
    console.log(location);
    const filtered = activities.filter((activity) =>
      activity.activityPlace.includes(location)
    );
    setFilterByLocation(location);
    setFilteredActivities(filtered);
  };

  return { filterByLocation, filteredActivities, handleFilterClick };
};

export default useFilterActivities;
