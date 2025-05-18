function restrictTo(...allowedRoles) {
    return (req, res, next) => {
      if (!req.user || !allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Access denied: insufficient permissions' });
      }
      next();
    };
  }
  
  function restrictIfNotOwnerOrAdmin(entityFetcher) {
    return async (req, res, next) => {
      try {
        const resource = await entityFetcher(req);
        const isOwner = resource?.user?.toString() === req.user.id;
        const isAdmin = req.user.role === 'admin';
  
        if (!isOwner && !isAdmin) {
          return res.status(403).json({ message: 'Access denied: only owner or admin can perform this action' });
        }
  
        req.resource = resource;
        next();
      } catch (err) {
        res.status(500).json({ message: 'Authorization error', error: err.message });
      }
    };
  }
  
  module.exports = {
    restrictTo,
    restrictIfNotOwnerOrAdmin
  };
  