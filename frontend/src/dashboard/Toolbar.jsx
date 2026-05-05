import Button from '../shared/Button'

const Toolbar = ({ blueprint, onSave, onNew, isSaving }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="sticky top-0 z-40 glass-effect border-b border-white/10 px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Metadata */}
        <div className="flex items-center gap-6">
          <div>
            <p className="text-sm text-gray-400">Created</p>
            <p className="text-sm font-medium text-gray-200">
              {formatDate(blueprint.createdAt)}
            </p>
          </div>
          {blueprint.isSaved && blueprint.savedAt && (
            <div>
              <p className="text-sm text-gray-400">Saved</p>
              <p className="text-sm font-medium text-green-400">
                {formatDate(blueprint.savedAt)}
              </p>
            </div>
          )}
          <div>
            <p className="text-sm text-gray-400">Status</p>
            <div className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  blueprint.isSaved ? 'bg-green-500' : 'bg-yellow-500'
                }`}
              ></span>
              <p className="text-sm font-medium text-gray-200">
                {blueprint.isSaved ? 'Saved' : 'Unsaved'}
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {!blueprint.isSaved && (
            <Button
              onClick={onSave}
              variant="primary"
              size="small"
              isLoading={isSaving}
            >
              Save Blueprint
            </Button>
          )}
          <Button onClick={onNew} variant="secondary" size="small">
            New Blueprint
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Toolbar
