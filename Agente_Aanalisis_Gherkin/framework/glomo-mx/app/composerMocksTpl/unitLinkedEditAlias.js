
module.exports = CONFIG => {
  const product = 'unitLinked';
  const productName = 'unit-linked-mx';
  const editAliasBase = require('./product/_edit-alias-template.js')(product, productName)(CONFIG);
  const { connectionsIn, connectionsOut, setProperty } = require('./common/helpers/_utils');
  const { globalServices: { versions: { accounts } } } = CONFIG;
  const connectionsInUnitLinked = connectionsIn(editAliasBase);
  const connectionsOutUnitLinked = connectionsOut(editAliasBase);
  const setPropertyUnitLinked = setProperty(editAliasBase);
  const analytics = require('./analytics/_productEditAlias')(product)(CONFIG, 'edit alias');

  setPropertyUnitLinked('bbva-feature-edit-alias-' + productName).apiVersion = accounts;

  connectionsOutUnitLinked('cells-handle-life-cycle').unitLinked_edit_alias_init_page = {
    bind: 'init-page',
    analytics: analytics.UNIT_LINKED_APP_HUELLA_EDIT_ALIAS
  };

  connectionsInUnitLinked('bbva-feature-edit-alias-' + productName).unit_linked_original_alias = {
    bind: 'originalAlias'
  };

  connectionsOutUnitLinked('bbva-feature-edit-alias-' + productName).navigation_unitlinked_channel = {
    bind: 'bbva-feature-edit-alias-' + productName + '-success-event'
  };

  connectionsOutUnitLinked('bbva-feature-edit-alias-' + productName).global_edit_alias_success_toast = {
    bind: 'bbva-feature-edit-alias-' + productName + '-toast-success-event'
  };

  return editAliasBase;
};