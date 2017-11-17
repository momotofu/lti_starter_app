module Lti
  module Roles
    ADMIN_ROLES = [
      "administrator", # Internal (non-LTI) role
      "urn:lti:sysrole:ims/lis/SysAdmin",
      "urn:lti:sysrole:ims/lis/Administrator",
    ].freeze

    INSTRUCTOR_ROLES = [
      "urn:lti:role:ims/lis/Instructor",
      "urn:lti:role:ims/lis/TeachingAssistant",
    ].freeze
  end
end
