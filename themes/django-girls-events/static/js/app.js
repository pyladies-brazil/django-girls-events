$(document).ready(function() {
  var map_use_case = new mapUseCase();
  var list_events_use_case = new listEventsUseCase();
  map_use_case.execute();
  list_events_use_case.execute();
});
