class Types::HelloWorldMutationType < Types::BaseObject
  field :create_lti_deep_link_jwt, mutation: Mutations::CreateLtiDeepLinkJwtMutation
  field :copy_lti_launch, mutation: Mutations::CopyLtiLaunchMutation do
    guard ->(_obj, _args, ctx) {
      ctx[:current_user].admin? ||
        ctx[:current_user].can_author?(ctx[:jwt_context_id], ctx[:current_application_instance])
    }
  end
end
