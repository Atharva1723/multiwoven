# frozen_string_literal: true

module Multiwoven
  module Integrations::Core
    class BaseConnector
      include Integrations::Protocol
      include Utils
      include Constants

      def connector_spec
        @connector_spec ||= begin
          spec_json = keys_to_symbols(read_json(CONNECTOR_SPEC_PATH)).to_json
          ConnectorSpecification.from_json(spec_json)
        end
      end

      def meta_data
        @meta_data ||= read_json(META_DATA_PATH).to_h
      end

      def check_connection(_connection_config)
        raise "Not implemented"
        # returns Protocol.ConnectionStatus
      end

      private

      def read_json(file_path)
        # TODO: Rethink. Hack to find connector folder
        connector_folder = self.class.to_s.split("::")[2..3].map(&:downcase).join("/")
        file_path = File.join(
          INTEGRATIONS_PATH, "#{connector_folder}/",
          file_path
        )
        file_contents = File.read(file_path)
        JSON.parse(file_contents)
      end
    end
  end
end
