let ioInstance = null;

export const setSocketServer = (io) => {
  ioInstance = io;
};

export const emitReservationEvent = (event, payload) => {
  if (ioInstance) {
    ioInstance.emit(event, payload);
  }
};
