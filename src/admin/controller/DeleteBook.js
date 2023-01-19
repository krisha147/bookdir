export function DeleteBoook() {
  return (
    <>
      <h1>hello</h1>
      <div className="modal" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title">Are you sure you want to delete</h6>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div> */}
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Delete
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
