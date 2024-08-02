// nhóm các shows(xuất chiếu) trong cùng 1 rạp
export const useGroupShowsByTheater = (shows, theaters) => {
  if (!shows || !theaters) {
    return [];
  }

  const groupShowsObject = shows.reduce((accumulator, currentShow) => {
    const theaterID = currentShow.theaters_id;
    if (!accumulator[theaterID]) {
      accumulator[theaterID] = { ...currentShow };
      accumulator[theaterID]["listShowID"] = [];
    }
    accumulator[theaterID]["listShowID"].push({
      showID: currentShow.show_id,
      time: currentShow.time,
    });
    accumulator[theaterID]["theater"] = theaters?.find(
      (item) => item.theater_id === theaterID
    );
    return accumulator;
  }, {});
  return Object.values(groupShowsObject);
};
